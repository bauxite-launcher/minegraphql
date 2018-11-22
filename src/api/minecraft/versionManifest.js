import { fetchJson } from '../fetch';
import type { VersionId } from './versionList';

type FileDownload = {
  sha1: string,
  url: string,
  size?: number,
  path?: string,
};

type AssetIndex = {
  id: VersionId,
  sha1: string,
  size: number,
  totalSize: number,
  url: string,
};

type RawVersionManifest = {
  id: VersionId,
  downloads: { [key: 'client' | 'server']: FileDownload },
  assetIndex: AssetIndex,
};

type VersionManifest = {
  id: VersionId,
  clientDownload?: FileDownload,
  serverDownload?: FileDownload,
  assetIndex: AssetIndex,
};

export async function fetchMinecraftVersionManifest(
  manifestUrl: string,
): Promise<RawVersionManifest> {
  return fetchJson(manifestUrl);
}

export function parseMinecraftVersionManifest(
  rawManifest: RawVersionManifest,
): VersionManifest {
  return {
    id: rawManifest.id,
    assetIndex: rawManifest.assetIndex,
    clientDownload: rawManifest.downloads.client,
    serverDownload: rawManifest.downloads.server,
  };
}

export async function getMinecraftVersionManifest(
  manifestUrl: string,
): Promise<VersionManifest> {
  const rawManifest = await fetchMinecraftVersionManifest(manifestUrl);
  return parseMinecraftVersionManifest(rawManifest);
}
