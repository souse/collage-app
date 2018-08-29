import request from '../utils/request';
/**
 * 获取token
 * @return {[type]} [description]
 */
export const getToken = async () => {
  return request.ajax('/get-wechat-auth-link');
}

/**
 * 根据分馆id 获取分馆可以参加的活动信息
 * @param  {[type]} storeId [description]
 * @return {[type]}         [description]
 */
export const getStoreActivity = async (storeId) => {
  return request.ajax('/activity/get-store-activity-role', { data: { storeId, } });
}

/**
 * 获取科目列表
 * @return {[type]} [description]
 */
export const getSubjects = () => {

}

/**
 * 检查学员是否有非公益课合同
 * @return {[type]} [description]
 */
export const checkStudents = () => {

}

/**
 * 提交拼团
 * @return {[type]} [description]
 */
export const submitCollage = () => {

}

/**
 * 获取拼团信息
 * @return {[type]} [description]
 */
export const getSollage = () => {

}

