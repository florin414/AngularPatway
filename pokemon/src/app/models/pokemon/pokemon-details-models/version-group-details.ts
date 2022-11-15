import { MoveLearnMethod } from "./move-learn-method";
import { VersionGroup } from "./versionGroup";

export class VersionGroupDetails{
  level_learned_at: number = 0;
  move_learn_method!: MoveLearnMethod;
  version_group!: VersionGroup;
}
