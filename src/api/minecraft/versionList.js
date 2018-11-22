// @flow
import dateCompareDesc from 'date-fns/compare_desc';
import { fetchJson } from '../fetch';

export type VersionId = string;

type RawReleaseChannel = 'release' | 'snapshot' | 'old_alpha' | 'old_beta';
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

export type ReleaseChannel = 'RELEASE' | 'SNAPSHOT' | 'OLD_ALPHA' | 'OLD_BETA';
export type MinecraftVersion = {
  id: VersionId,
  releaseChannel: ReleaseChannel,
  manifestUrl: string,
  releasedAt: Date,
  previousVersion?: MinecraftVersion,
  nextVersion?: MinecraftVersion,
};

const versionManifestUrl = 'https://launchermeta.mojang.com/mc/game/version_manifest.json';

const releaseChannelMap: { [raw: RawReleaseChannel]: ReleaseChannel } = {
  release: 'RELEASE',
  snapshot: 'SNAPSHOT',
  old_alpha: 'OLD_ALPHA',
  old_beta: 'OLD_BETA',
};

export async function fetch(): Promise<RawResponse> {
  return fetchJson(versionManifestUrl);
}

export async function parse(
  rawVersions: RawResponse,
): Promise<Array<MinecraftVersion>> {
  return rawVersions.versions
    .map(version => ({
      id: version.id,
      releaseChannel: releaseChannelMap[version.type],
      manifestUrl: version.url,
      releasedAt: new Date(version.releaseTime),
    }))
    .sort((a, b) => dateCompareDesc(a.releasedAt, b.releasedAt))
    .map((version, index, list) => ({
      ...version,
      previousVersion: list[index + 1],
      nextVersion: list[index - 1],
    }));
}

export async function get() {
  const rawResponse = await fetch();
  return parse(rawResponse);
}
