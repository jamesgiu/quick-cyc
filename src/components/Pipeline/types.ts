export enum PipelineIntent {
  NONE = "qc-intent-none",
  WARNING = "qc-intent-warning",
  SUCCESS = "qc-intent-success",
  FAILURE = "qc-intent-failure",
  IN_PROGRESS = "qc-intent-in-progress",
  SKIPPED = "qc-intent-skipped",
}

export enum PipelineSize {
  XS = "qc-size-xs",
  S = "qc-size-s",
  M = "qc-size-m",
  L = "qc-size-l",
  XL = "qc-size-xl",
}

export enum PipelineIntentColours {
  NONE = "#5f6b7c",
  WARNING = "#fbb360",
  SUCCESS = "#238551",
  FAILURE = "#cd4246",
  IN_PROGRESS = "#2d72d2",
  SKIPPED = "#75787c",
}
