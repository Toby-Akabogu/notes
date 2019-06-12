export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-uploads30"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://sthvq0oyo4.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_q60SxcsmG",
    APP_CLIENT_ID: "1msnslmduah0surjumkn94eggl",
    IDENTITY_POOL_ID: "us-east-2:fba9db08-0321-43ac-acc4-4a313838e3a0"
  }
};
