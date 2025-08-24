![ezgif-4-fef5b85f32](https://github.com/jamesgiu/react-pipes/assets/13777223/57c7879e-4438-44a2-86d5-3bfa50df5b22)

# 🔀 Quick Cyc ([sɪk])

A component library for displaying pipelines in React.

This component library is currently under construction and is not recommended for production at this stage.

## 📚 Hosted documentation

Check out the [hosted documentation](https://jamesgiu.github.io/quick-cyc/).

## 🚀 Features

### A wide variety of intents and icons

![ezgif-4-b0c494d8b3](https://github.com/jamesgiu/react-pipes/assets/13777223/cb65ca2a-03d5-430e-bfa8-a0d4fb22ab5f)

### Sub pipelines

![ezgif-4-3e54426d46](https://github.com/jamesgiu/react-pipes/assets/13777223/7384304e-8a80-416a-958e-d205e1e72c52)

## 💡 Getting started

### Installation

```
npm i quick-cyc
```

### Quick code example

```
<Pipeline
  label= {'Pipeline'}
  schema={[
    {
    icon:PipelineIcons.Icon2fa,
    intent:PipelineIntent.SUCCESS,
    active:false,
    attempts:1,
    size:PipelineSize.M,
    },
    {
      intent:PipelineIntent.SUCCESS,
      active:false,
      size:PipelineSize.S,
    },
    {
      icon:PipelineIcons.IconAward,
      intent:PipelineIntent.SUCCESS,
      active:false,
      attempts:1,
      size:PipelineSize.M,
    }
  ]}
  />
```

## ⚙ Components

### Pipe

![image](https://github.com/jamesgiu/quick-cyc/assets/13777223/0b2677e3-f900-46c0-bebc-93eb73197773)

| Prop            |                                                       Description                                                        | Optional |
| --------------- | :----------------------------------------------------------------------------------------------------------------------: | -------: |
| intent          | "qc-intent-none" "qc-intent-warning" "qc-intent-success" "qc-intent-failure" "qc-intent-in-progress" "qc-intent-skipped" |       no |
| active          |                                                         boolean                                                          |       no |
| size            |                              "qc-size-xs" "qc-size-s" "qc-size-m" "qc-size-l" "qc-size-xl"                               |       no |
| progressPercent |                                                          number                                                          |      yes |

### PipelineNode

![image](https://github.com/jamesgiu/quick-cyc/assets/13777223/00b17998-3a37-4f0b-ac59-144bb171d07a)

| Prop            |                                                       Description                                                        | Optional |
| --------------- | :----------------------------------------------------------------------------------------------------------------------: | -------: |
| intent          | "qc-intent-none" "qc-intent-warning" "qc-intent-success" "qc-intent-failure" "qc-intent-in-progress" "qc-intent-skipped" |       no |
| active          |                                                         boolean                                                          |       no |
| size            |                              "qc-size-xs" "qc-size-s" "qc-size-m" "qc-size-l" "qc-size-xl"                               |       no |
| progressPercent |                                                          number                                                          |      yes |
| onNodeClick     |                                                         ()=>void                                                         |       no |
| active          |                                                         boolean                                                          |       no |
| size            |                              "qc-size-xs" "qc-size-s" "qc-size-m" "qc-size-l" "qc-size-xl"                               |       no |
| icon            |                       [docs](https://jamesgiu.github.io/quick-cyc/?path=/docs/pipelinenode--docs)                        |      yes |
| attempts        |                                                          number                                                          |      yes |
| progressPercent |                                                          number                                                          |      yes |
| className       |                                                          string                                                          |      yes |

### Pipeline

![ezgif-4-b0c494d8b3](https://github.com/jamesgiu/quick-cyc/assets/13777223/cb65ca2a-03d5-430e-bfa8-a0d4fb22ab5f)

| Prop   |                         Description                          | Optional |
| ------ | :----------------------------------------------------------: | -------: |
| schema | (PipelineProps \| PipelineNodeProps \| PipelinePipesProps)[] |       no |

<img src="https://github.com/jamesgiu/quick-cyc/assets/13777223/7706e6f4-b3e6-49a0-a693-42e0069a11bb" width="50" height="50" align="right"/>
