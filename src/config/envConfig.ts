import env from 'react-native-config';

type ENV_CONFIG = {
  ENV_VAR?: string;
};

const envConfig: ENV_CONFIG = {
  ENV_VAR: env.ENVIRONMENT_VAR,
};

export default envConfig;
