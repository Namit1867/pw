var push = require('web-push');

let vapidKeys = {
  publicKey: 'BL9a93S4box2Jornl4LeCycPagf2WnkVY3eFlLSupbsAw36Mclc6IOFLTYLChURDnyWatkYl1M_DxhG9SfPwbX4',
  privateKey: 'Q0SRLx705zbHVnPlmoPOuoW19Dc26FLg2FNRUU7X9tY'
};

push.setVapidDetails(
  'namit.cs.rdjsp@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let sub = {
  endpoint:
    'https://fcm.googleapis.com/fcm/send/fwMG_ImcKYc:APA91bHtTnPUQ0tBehI7Kk1CGn4s3yhIKhJunhqiggl5XxbyVPmqxDkugwctQMzL2VDTrG_ypKwWqb1Djv-kqWbxpmsatPSjSAUldFENqCIZShaFvZFiCwH-X2hS0-Xjqv5mq2XYHcf9',
  expirationTime: null,
  keys: {
    p256dh:
      'BLHrTAa9dZ4LV5DoCgtXCXLMd21_S3qyt4eSqn6UQCjIEAuemY0QI29Mvc-LL02e0DLGPKd3xkVHjCD4eqJWHSg',
    auth: 'TW-LBZmYtXNW7VQUPX4I0w'
  }
};

push.sendNotification(sub, 'test message');
