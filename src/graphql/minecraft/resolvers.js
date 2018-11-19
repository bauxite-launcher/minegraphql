// @flow
export const resolver = {
  Query: {
    minecraftVersions: async (root, args, { getMinecraftVersions }) => getMinecraftVersions(),
    minecraftVersion: async (root, { id }, { getMinecraftVersions }) => {
      const versions = await getMinecraftVersions();
      return versions.find(version => version.id === id);
    },
    latestMinecraftVersion: async (root, { releaseChannel }, { getMinecraftVersions }) => {
      const versions = await getMinecraftVersions();
      return versions.find(version => version.releaseChannel === releaseChannel);
    },
  },
};
