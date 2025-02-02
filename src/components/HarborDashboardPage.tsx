import React from "react";
import { Entity } from "@backstage/catalog-model";
import { InfoCard } from "@backstage/core-components";

import { HarborRepository } from "./HarborRepository";
import { useHarborAppData } from "./useHarborAppData";

export const HarborDashboardPage = ({ entity }: { entity: Entity }) => {
  const { repositorySlug } = useHarborAppData({ entity });
  const info = repositorySlug.split("/");

  const project = info.shift() as "string";
  const repository = info.join("/");

  return (
    <InfoCard title="Harbor Dashboard">
      <HarborRepository
        project={project}
        repository={repository}
        widget={false}
      />
    </InfoCard>
  );
};
