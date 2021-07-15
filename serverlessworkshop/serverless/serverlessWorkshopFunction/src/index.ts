import { MsmServer } from '@wix/ambassador-msm-server/rpc';
import type { FunctionsBuilder } from '@wix/serverless-api';
import { FullHttpResponse } from '@wix/serverless-api';

module.exports = function builder (builder: FunctionsBuilder) {
  return builder
    .addWebFunction('GET', '/hello', async () => new FullHttpResponse({ status: 200, body: 'hello, serverless' }))
    .addWebFunction('GET', '/isfree/:sitename', async (ctx, req) => {
      const grpcClient = MsmServer().MetaSiteReadApi()(ctx.aspects);
      const siteName = req.params.sitename;
      return await grpcClient.isSiteNameFree({
        siteName,
      });
    });
};
