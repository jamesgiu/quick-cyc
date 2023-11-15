![ezgif-4-fef5b85f32](https://github.com/jamesgiu/react-pipes/assets/13777223/57c7879e-4438-44a2-86d5-3bfa50df5b22)

# 🔀 Quick Acyclic React Pipes
A component library for displaying pipelines in React.

## 📚 Hosted documentation
Check out the [hosted documentation](https://jamesgiu.github.io/quick-acyclic/).

## 🚀 Features
### A wide variety of intents and icons
![ezgif-4-b0c494d8b3](https://github.com/jamesgiu/react-pipes/assets/13777223/cb65ca2a-03d5-430e-bfa8-a0d4fb22ab5f)

### Sub pipelines
![ezgif-4-3e54426d46](https://github.com/jamesgiu/react-pipes/assets/13777223/7384304e-8a80-416a-958e-d205e1e72c52)

## 💡 Getting started
### Installation
```
npm i quick-acyclic
``` 

### Quick code example
```
<ReactPipes
  label="Pipeline"
  schema={[
    {
      active: false,
      attempts: 1,
      icon: 'Icon2fa',
      intent: 'rp-intent-success',
      size: 'rp-size-m'
    },
    {
      active: false,
      intent: 'rp-intent-success',
      size: 'rp-size-s'
    },
    {
      active: false,
      attempts: 1,
      icon: 'IconAward',
      intent: 'rp-intent-success',
      size: 'rp-size-m'
    },
    {
      active: false,
      intent: 'rp-intent-success',
      size: 'rp-size-s'
    },
    {
      active: true,
      icon: 'IconClock',
      intent: 'rp-intent-in-progress',
      size: 'rp-size-m'
    },
    {
      active: true,
      intent: 'rp-intent-in-progress',
      progressPercent: 30,
      size: 'rp-size-s'
    },
    {
      active: false,
      icon: 'Icon3dRotate',
      intent: 'rp-intent-none',
      size: 'rp-size-m'
    }
  ]}
/>
```

## ⚙ Components
### Pipe
![image](https://github.com/jamesgiu/quick-acyclic/assets/13777223/0b2677e3-f900-46c0-bebc-93eb73197773)

| Prop          | Description        | Optional  |
| ------------- |:-------------:| -----:|
| intent      |"rp-intent-none" "rp-intent-warning" "rp-intent-success" "rp-intent-failure" "rp-intent-in-progress" "rp-intent-skipped"  | no |
| active      | boolean      |   no |
|  size | "rp-size-xs" "rp-size-s" "rp-size-m" "rp-size-l" "rp-size-xl"      |   no |
|  progressPercent | number      |    yes |

### PipelineNode
![image](https://github.com/jamesgiu/quick-acyclic/assets/13777223/00b17998-3a37-4f0b-ac59-144bb171d07a)

| Prop          | Description        | Optional  |
| ------------- |:-------------:| -----:|
| intent      |"rp-intent-none" "rp-intent-warning" "rp-intent-success" "rp-intent-failure" "rp-intent-in-progress" "rp-intent-skipped"  | no |
| active      | boolean      |   no |
|  size | "rp-size-xs" "rp-size-s" "rp-size-m" "rp-size-l" "rp-size-xl"      |   no |
|  progressPercent | number      |    yes |
| onNodeClick      | ()=>void  | no |
| active      | boolean      |   no |
|  size | "rp-size-xs" "rp-size-s" "rp-size-m" "rp-size-l" "rp-size-xl"      |   no |
|  icon |   [docs](https://jamesgiu.github.io/quick-acyclic/?path=/docs/pipelinenode--docs)    |    yes |
|  attempts | number      |    yes |
|  progressPercent | number      |    yes |
|  className | string      |    yes |

### Pipeline
![ezgif-4-b0c494d8b3](https://github.com/jamesgiu/react-pipes/assets/13777223/cb65ca2a-03d5-430e-bfa8-a0d4fb22ab5f)

| Prop          | Description        | Optional  |
| ------------- |:-------------:| -----:|
| schema      | (ReactPipesProps \| ReactPipesNodeProps \| ReactPipesPipeProps)[]  | no

<img src="https://github.com/jamesgiu/react-pipes/assets/13777223/7706e6f4-b3e6-49a0-a693-42e0069a11bb" width="50" height="50" align="right"/>
