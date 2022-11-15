import { VersionGroupDetails } from './version-group-details';
import { Move } from "./move";

export class Moves{
  move!: Move;
  version_group_details: VersionGroupDetails[] = [];
}
