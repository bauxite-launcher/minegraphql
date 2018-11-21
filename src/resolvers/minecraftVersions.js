// @flow
import type { RootValue, API } from './types';
import type { ReleaseChannel } from '../api/minecraft/versionList';

export const resolver = {
  Query: {
    minecraftVersions: async (
      root: RootValue,
      args: {},
      { getMinecraftVersions }: API,
    ) => getMinecraftVersions(),
    minecraftVersion: async (
      root: RootValue,
      { id }: { id: String },
      { getMinecraftVersions }: API,
    ) => {
      const versions = await getMinecraftVersions();
      return versions.find(version => version.id === id);
    },
    latestMinecraftVersion: async (
      root: RootValue,
      { releaseChannel }: { releaseChannel: ReleaseChannel },
      { getMinecraftVersions }: API,
    ) => {
      const versions = await getMinecraftVersions();
      return versions.find(
        version => version.releaseChannel === releaseChannel,
      );
    },
  },
};
