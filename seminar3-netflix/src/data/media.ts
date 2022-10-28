import {Media} from '../interface/media'

const mediaData: Media[]=[{
    title:"마수리남",
    mediaInfo: {
        thumbNail:"a",
        length: 60,
        quality: "HD",
        seriesNum : 5,
        age: 19
    },
    contentInfo:{
        createYear: 2022,
        actors: ["황정민","하정우"],
        genre : ["액션", "사실"],
        character: "사실에 기반한 액션",
        summary : "수리남이 아닌 마수리남!"
    },
    userInfo:{
        currentTime: 45,
        isLiked: false
    }
}];

export default mediaData;