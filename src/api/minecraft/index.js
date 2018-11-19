// @flow
import dateCompareDesc from 'date-fns/compare_desc';
import fetch from '../fetch';

const versionManifestUrl = 'https://launchermeta.mojang.com/mc/game/version_manifest.json';

type RawReleaseChannel = 'release' | 'snapshot' | 'old_alpha' | 'old_beta';
type VersionId = string;

type RawResponse = {
  latest: {
    [channel: RawReleaseChannel]: VersionId,
  },
  versions: Array<{
    id: VersionId,
    type: RawReleaseChannel,
    url: string,
    time: string,
    releaseTime: string,
  }>,
};

type ReleaseChannel = 'RELEASE' | 'SNAPSHOT' | 'OLD_ALPHA' | 'OLD_BETA';

type MinecraftVersion = {
  id: VersionId,
  releaseChannel: ReleaseChannel,
  manifestUrl: string,
  releasedAt: Date,
};

export async function fetchMinecraftVersions(): Promise<RawResponse> {
  const response = await fetch(versionManifestUrl);
  return response.json();
}

export async function parseMinecraftVersions(
  rawVersions: RawResponse,
): Promise<Array<MinecraftVersion>> {
  return rawVersions.versions
    .map(version => ({
      id: version.id,
      releaseChannel: version.type.toUpperCase(),
      manifestUrl: version.url,
      releasedAt: new Date(version.releaseTime),
    }))
    .sort(dateCompareDesc);
}

export async function getMinecraftVersions() {
  const rawResponse = await fetchMinecraftVersions();
  return parseMinecraftVersions(rawResponse);
}
