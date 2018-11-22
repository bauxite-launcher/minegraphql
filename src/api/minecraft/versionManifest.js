// @flow
import { fetchJson } from '../fetch';
import type { VersionId, RawReleaseChannel } from './versionList';

type FileDownload = {
  sha1: string,
  url: string,
  size?: number,
  path?: string,
  id?: string,
};

type AssetIndex = {
  id: VersionId,
  sha1: string,
  size: number,
  totalSize: number,
  url: string,
};

type LaunchArgument =
  | string
  | {
      rules: Array<{
        action: 'allow' | 'deny',
        features?: { [key: string]: boolean },
        os?: { name: string, version?: string } | { arch: string },
      }>,
      value: string,
    };

type LibraryDefinition = {
  name: string,
  downloads: {
    artifact: FileDownload,
    classifiers?: {
      [key: string]: FileDownload,
    },
  },
  natives?: {
    [key: string]: FileDownload,
  },
};

type ClientOrServer = 'client' | 'server';
type LaunchArgumentType = 'game' | 'jvm';

type RawVersionManifest = {
  id: VersionId,
  downloads: { [key: ClientOrServer]: FileDownload },
  assetIndex: AssetIndex,
  assets: string,
  arguments: { [key: LaunchArgumentType]: Array<LaunchArgument> },
  libraries: Array<LibraryDefinition>,
  logging: {
    [key: ClientOrServer]: {
      argument: string,
      type: string,
      file: FileDownload,
    },
  },
  mainClass: string,
  minimumLauncherVersion: number,
  releaseTime: string,
  time: string,
  type: RawReleaseChannel,
};

type VersionManifest = {
  id: VersionId,
  clientDownload?: FileDownload,
  serverDownload?: FileDownload,
  assetIndex: AssetIndex,
};

export async function fetch(manifestUrl: string): Promise<RawVersionManifest> {
  return fetchJson(manifestUrl);
}

export function parse(rawManifest: RawVersionManifest): VersionManifest {
  return {
    id: rawManifest.id,
    assetIndex: rawManifest.assetIndex,
    clientDownload: rawManifest.downloads.client,
    serverDownload: rawManifest.downloads.server,
  };
}

export async function get(manifestUrl: string): Promise<VersionManifest> {
  const rawManifest = await fetch(manifestUrl);
  return parse(rawManifest);
}
