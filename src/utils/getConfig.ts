import rawConfig from '../data/config.json';
import type { AppConfig } from '../types/config';

/**
 * Safely fetches and types the site configuration.
 * Driven by the local JSON file for zero-code updates.
 */
export function getConfig(): AppConfig {
  return rawConfig as AppConfig;
}
