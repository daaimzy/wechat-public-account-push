/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx592db05283419e1c',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '45853f4f1d5f12d24bb7e1b78658cedf',

  PROVINCE: '河北',
  CITY: '廊坊',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小懒猪',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'og4aa5sbA0v3PUZDXErgm2V_4ynA',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'XHtch42TNG1fGBpDJvwTuysN8m7VW6lPFcX-869SvsE',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-30',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2002', date: '01-30',
        },
      ],
    },
  ],
  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'XHtch42TNG1fGBpDJvwTuysN8m7VW6lPFcX-869SvsE',

  CALLBACK_USERS: [
    {
      name: 'J',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'og4aa5oW-Z8V7J1Za_g3i8ooIh4Y	',
    }
  ],

}

module.exports = USER_CONFIG

