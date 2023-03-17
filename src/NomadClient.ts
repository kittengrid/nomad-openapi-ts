/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';

import { AclService } from './services/AclService';
import { AllocationsService } from './services/AllocationsService';
import { DeploymentsService } from './services/DeploymentsService';
import { EnterpriseService } from './services/EnterpriseService';
import { EvaluationsService } from './services/EvaluationsService';
import { JobsService } from './services/JobsService';
import { MetricsService } from './services/MetricsService';
import { NamespacesService } from './services/NamespacesService';
import { NodesService } from './services/NodesService';
import { OperatorService } from './services/OperatorService';
import { PluginsService } from './services/PluginsService';
import { RegionsService } from './services/RegionsService';
import { ScalingService } from './services/ScalingService';
import { SearchService } from './services/SearchService';
import { StatusService } from './services/StatusService';
import { SystemService } from './services/SystemService';
import { VariablesService } from './services/VariablesService';
import { VolumesService } from './services/VolumesService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class NomadClient {

    public readonly acl: AclService;
    public readonly allocations: AllocationsService;
    public readonly deployments: DeploymentsService;
    public readonly enterprise: EnterpriseService;
    public readonly evaluations: EvaluationsService;
    public readonly jobs: JobsService;
    public readonly metrics: MetricsService;
    public readonly namespaces: NamespacesService;
    public readonly nodes: NodesService;
    public readonly operator: OperatorService;
    public readonly plugins: PluginsService;
    public readonly regions: RegionsService;
    public readonly scaling: ScalingService;
    public readonly search: SearchService;
    public readonly status: StatusService;
    public readonly system: SystemService;
    public readonly variables: VariablesService;
    public readonly volumes: VolumesService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'http://127.0.0.1:4646/v1',
            VERSION: config?.VERSION ?? '1.1.4',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.acl = new AclService(this.request);
        this.allocations = new AllocationsService(this.request);
        this.deployments = new DeploymentsService(this.request);
        this.enterprise = new EnterpriseService(this.request);
        this.evaluations = new EvaluationsService(this.request);
        this.jobs = new JobsService(this.request);
        this.metrics = new MetricsService(this.request);
        this.namespaces = new NamespacesService(this.request);
        this.nodes = new NodesService(this.request);
        this.operator = new OperatorService(this.request);
        this.plugins = new PluginsService(this.request);
        this.regions = new RegionsService(this.request);
        this.scaling = new ScalingService(this.request);
        this.search = new SearchService(this.request);
        this.status = new StatusService(this.request);
        this.system = new SystemService(this.request);
        this.variables = new VariablesService(this.request);
        this.volumes = new VolumesService(this.request);
    }
}

