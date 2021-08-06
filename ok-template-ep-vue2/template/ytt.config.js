import { defineConfig } from 'yapi-to-typescript';

const apiNames = new Set();

export default defineConfig([
  {
    serverUrl: 'https://apihub-test.zhenguanyu.com/',
    typesOnly: false,
    target: 'javascript',
    reactHooks: {
      enabled: false,
    },
    prodEnvName: 'production',
    outputFilePath: 'src/api/index.js',
    requestFunctionFilePath: 'src/api/request.js',
    noUpdateTimeComment: true,
    projects: [
      {
        token: 'please put the token of your yapi projocet here',
        categories: [
          {
            id: 0,
            comment: {
              updateTime: false,
            },
            getRequestFunctionName(interfaceInfo, changeCase) {
              let apiName = changeCase.camelCase(interfaceInfo.parsedPath.name);
              if (apiNames.has(apiName)) {
                const arr = interfaceInfo.parsedPath.dir.split('/');
                const scope = arr[arr.length - 1];
                apiName = changeCase.camelCase(
                  scope + '_' + interfaceInfo.parsedPath.name
                );
              }
              apiNames.add(apiName);
              return apiName;
            },
          },
        ],
      },
    ],
  },
]);
