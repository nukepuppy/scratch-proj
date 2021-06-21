import { AnyApiFactory, configApiRef, createApiFactory } from '@backstage/core';
import { ScmIntegrationsApi, scmIntegrationsApiRef } from '@backstage/integration-react';
import { costInsightsApiRef } from "@backstage/plugin-cost-insights";
import {CostInsightsClient} from './CostInsightClient';

/*
export const apis: AnyApiFactory[] = [
  createApiFactory({
    api: scmIntegrationsApiRef,
    deps: { configApi: configApiRef },
    factory: ({ configApi }) => ScmIntegrationsApi.fromConfig(configApi),
  }),
];*/

export const apis = [
    createApiFactory({
      api: costInsightsApiRef,
      deps: {},
      factory: () => new CostInsightsClient(),
    }),
]