import { UserInfo } from './userInfo';
import { ContentInfo } from './contentInfo';
import { MediaInfo } from './mediaInfo';


export interface Media{
    title:String,
    mediaInfo: MediaInfo
    contentInfo: ContentInfo,
    userInfo : UserInfo
}