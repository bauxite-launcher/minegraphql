// @flow
import type { RootValue, API } from './types';
import type { ReleaseChannel } from '../api/minecraft/versionList';

export const resolver = {
  Query: {
    minecraftVersions: async (
      root: RootValue,
      args: {},
      { minecraftVersions }: API,
    ) => minecraftVersions.get(),

    minecraftVersion: async (
      root: RootValue,
      { id }: { id: String },
      { minecraftVersions }: API,
    ) => {
      const versions = await minecraftVersions.get();
      return versions.find(version => version.id === id);
    },

    latestMinecraftVersion: async (
      root: RootValue,
      { releaseChannel }: { releaseChannel: ReleaseChannel },
      { minecraftVersions }: API,
    ) => {
      const versions = await minecraftVersions.get();
      return versions.find(
        version => version.releaseChannel === releaseChannel,
      );
    },
  },
};
