// @flow
import type { API } from './types';
import type { MinecraftVersion } from '../api/minecraft/versionList';

export const resolver = {
  MinecraftVersion: {
    manifest: async (
      { manifestUrl }: MinecraftVersion,
      args: {},
      { getMinecraftVersionManifest }: API,
    ) => getMinecraftVersionManifest(manifestUrl),
  },
};
