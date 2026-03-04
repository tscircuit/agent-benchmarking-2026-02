import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VBUS"],
  pin2: ["D_NEG"],
  pin3: ["D_POS"],
  pin4: ["GND3"],
  pin5: ["GND2"],
  pin6: ["GND1"]
} as const

export const USB_B10_BRW = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C720549"
  ]
}}
      manufacturerPartNumber="USB_B10_BRW"
      footprint={<footprint>
        <platedhole  portHints={["pin6"]} pcbX="6.019927000000052mm" pcbY="-1.8799619500000517mm" outerDiameter="3.4999930000000004mm" holeDiameter="2.5000203999999995mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="-6.019927000000052mm" pcbY="-1.8799619500000517mm" outerDiameter="3.4999930000000004mm" holeDiameter="2.5000203999999995mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="1.2500609999999597mm" pcbY="0.8299640499999441mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="-1.2500609999999597mm" pcbY="0.8299640499999441mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-1.2500609999999597mm" pcbY="2.829960049999954mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin1"]} pcbX="1.2500609999999597mm" pcbY="2.829960049999954mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<silkscreenpath route={[{"x":6.074943400000052,"y":-3.860399950000101},{"x":6.074943400000052,"y":-12.330029950000153}]} />
<silkscreenpath route={[{"x":6.074943400000052,"y":3.969962849999888},{"x":6.074943400000052,"y":0.10032364999995025}]} />
<silkscreenpath route={[{"x":-6.0750450000000455,"y":-3.860399950000101},{"x":-6.0750450000000455,"y":-12.330029950000153}]} />
<silkscreenpath route={[{"x":-6.0750450000000455,"y":3.969962849999888},{"x":-6.0750450000000455,"y":0.10032364999995025}]} />
<silkscreenpath route={[{"x":-6.0750450000000455,"y":3.969962849999888},{"x":6.074943400000052,"y":3.969962849999888}]} />
<silkscreenpath route={[{"x":-6.0750450000000455,"y":-12.330029950000153},{"x":6.074943400000052,"y":-12.330029950000153}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=5cab07014cd64134b505237eaab2f627&pn=C720549",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: -0.00005079999993995443, y: -4.145057749999978, z: -2.829958450000004 },
      }}
      {...props}
    />
  )
}