// @flow
import { Output, Now } from '../../util/types'
import type { Alias, Deployment } from '../../util/types'
import fetchDeploymentByIdOrHost from '../../util/deploy/get-deployment-by-id-or-host'

async function fetchDeploymentFromAlias(
  output: Output, 
  now: Now, 
  contextName: string, 
  prevAlias: Alias | void,
  currentDeployment: Deployment
) {
  return (prevAlias && prevAlias.deploymentId && prevAlias.deploymentId !== currentDeployment.uid)
    ? fetchDeploymentByIdOrHost(now, contextName, prevAlias.deploymentId)
    : null
}

export default fetchDeploymentFromAlias
