import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"]
} as const

export const CL21A106KAYNNNE = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C15850"
  ]
}}
      manufacturerPartNumber="CL21A106KAYNNNE"
      footprint={<footprint>
        <smtpad portHints={["pin2"]} pcbX="0.9999979999998914mm" pcbY="0mm" width="1.4100048mm" height="1.3500100000000002mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-0.9999979999998914mm" pcbY="0mm" width="1.4100048mm" height="1.3500100000000002mm" shape="rect" />
<silkscreenpath route={[{"x":1.8111977999999453,"y":0.9036049999999705},{"x":0.4011929999999211,"y":0.9036049999999705}]} />
<silkscreenpath route={[{"x":0.4011929999999211,"y":-0.9036049999999705},{"x":1.8111977999999453,"y":-0.9036049999999705}]} />
<silkscreenpath route={[{"x":1.9635978000000023,"y":-0.7512050000000272},{"x":1.9635978000000023,"y":0.7512050000000272}]} />
<silkscreenpath route={[{"x":-1.811197800000059,"y":0.9036049999999705},{"x":-0.40119300000003477,"y":0.9036049999999705}]} />
<silkscreenpath route={[{"x":-0.40119300000003477,"y":-0.9036049999999705},{"x":-1.811197800000059,"y":-0.9036049999999705}]} />
<silkscreenpath route={[{"x":-1.9635978000000023,"y":-0.7512050000000272},{"x":-1.9635978000000023,"y":0.7512050000000272}]} />
<silkscreenpath route={[{"x":1.8111977999999453,"y":-0.9036049999997431},{"x":1.918960873452761,"y":-0.8589680734526155},{"x":1.9635977999998886,"y":-0.7512050000000272}]} />
<silkscreenpath route={[{"x":1.9635977999998886,"y":0.7512050000000272},{"x":1.918960873452761,"y":0.8589680734527292},{"x":1.8111977999999453,"y":0.9036049999998568}]} />
<silkscreenpath route={[{"x":-1.811197800000059,"y":-0.9036049999997431},{"x":-1.9189608734528747,"y":-0.8589680734526155},{"x":-1.9635978000000023,"y":-0.7512050000000272}]} />
<silkscreenpath route={[{"x":-1.9635978000000023,"y":0.7512050000000272},{"x":-1.9189608734528747,"y":0.8589680734527292},{"x":-1.811197800000059,"y":0.9036049999998568}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=b87ab0c5465a48b3a1c9a6dac8d30bc5&pn=C15850",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: -1.4130020000001196, y: 0, z: 0.12499499999994446 },
      }}
      {...props}
    />
  )
}