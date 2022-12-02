import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { sc } from "../constants";
import { UserCreateDTO } from "../interface/UserCreateDTO";
import { UserSignInDTO } from "../interface/UserSignInDTO";

const prisma = new PrismaClient();

//* 회원가입
const createUser = async (userCreateDto: UserCreateDTO) => {
  const salt = await bcrypt.genSalt(10); //^ 매우 작은 임의의 랜덤 텍스트 salt
  const password = await bcrypt.hash(userCreateDto.password, salt); //^ 위에서 랜덤을 생성한 salt를 이용해 암호화

  const data = await prisma.user.create({
    data: {
      userName: userCreateDto?.name,
      age: userCreateDto?.age,
      email: userCreateDto.email,
      password,
    },
  });

  return data;
};

//* 로그인
const signIn = async (userSignInDto: UserSignInDTO) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: userSignInDto.email,
      },
    });
    if (!user) return null;

    const isMatch = await bcrypt.compare(userSignInDto.password, user.password);
    if (!isMatch) return sc.UNAUTHORIZED;

    return user.id;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//* 유저 전체 조회
const getAllUser = async (page:number, limit:number) => {
  const data = await prisma.user.findMany({
    skip: (page-1)*limit,
    take: limit,
  });
  return data;
};

//* 유저 정보 업데이트
const updateUser = async (userId: number, name: string) => {
  const data = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      userName: name,
    },
  });

  return data;
};

//* 유저 삭제
const deleteUser = async (userId: number) => {
  await prisma.user.delete({
    where: {
      id: userId,
    },
  });
};

//* userId로 유저 조회
const getUserById = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  return user;
};

const searchUserByName = async(keyword: string, option:string) => {

  //? 유저 최신순 
  if(option=='desc'){
    const data= await prisma.user.findMany({
      where:{
        userName: {
          contains: keyword
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    return data;
  }

  //? 유저 오래된순
  if(option=='asc'){
    const data= await prisma.user.findMany({
      where:{
        userName: {
          contains: keyword
        }
      },
      orderBy : {
        createdAt: 'asc'
      }
    });
    return data;
  }
}

const userService = {
  createUser,
  signIn,
  getAllUser,
  updateUser,
  deleteUser,
  getUserById,
  searchUserByName
};

export default userService;