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
export const getSubjects = async (params) => {
  return request.ajax('/selections/get-store-subjects', params);
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
export const submitCollage = async (params) => {
  return request.ajax('/activity/submit-activity-order', params);
}

/**
 * 获取个人提交的订单信息
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const getOrder = async (id) => {
  return request.ajax(`/activity/get-activity-order-detail?activityOrderId=${id}`);
}

/**
 * 获取拼团订单信息
 * @param  {[type]} groupId [description]
 * @return {[type]}         [description]
 */
export const getGroupOrder = async (groupId) => {
  return request.ajax(`/activity/get-group-detail?groupId=${groupId}`);
}

/**
 * 获取拼团信息
 * @return {[type]} [description]
 */
export const getSollage = () => {

}

