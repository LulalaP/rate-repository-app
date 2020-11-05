import { join } from 'path';
import createExpoWebpackConfigAsync from '@expo/webpack-config';

const __dirname = 'D:/Work/CS/GitHub/rate-repository-app/rate-repository-app/';

export default async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.module.rules.push({
    test: /\.js$/,
    loader: 'babel-loader',
    include: [join(__dirname, 'node_modules/react-router-native')],
  });

  return config;
}