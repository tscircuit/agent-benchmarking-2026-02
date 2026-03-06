import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"]
} as const

export const RC0603FR_0727RL = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C137753"
  ]
}}
      manufacturerPartNumber="RC0603FR_0727RL"
      footprint={<footprint>
        <smtpad portHints={["pin2"]} pcbX="0.7533639999998059mm" pcbY="0mm" width="0.8064754mm" height="0.8640064000000001mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-0.7533639999999195mm" pcbY="0mm" width="0.8064754mm" height="0.8640064000000001mm" shape="rect" />
<silkscreenpath route={[{"x":0.42621199999996406,"y":-0.6606031999999686},{"x":1.3850873999999749,"y":-0.6606031999999686},{"x":1.3850873999999749,"y":0.6606031999999686},{"x":0.42621199999996406,"y":0.6606031999999686}]} />
<silkscreenpath route={[{"x":-0.42621200000007775,"y":-0.6606031999999686},{"x":-1.3850874000000886,"y":-0.6606031999999686},{"x":-1.3850874000000886,"y":0.6606031999999686},{"x":-0.42621200000007775,"y":0.6606031999999686}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=6bd5cd867e9542ebae21caaf5d2d4c4d&pn=C137753",
        rotationOffset: { x: 0, y: 0, z: 90 },
        positionOffset: { x: 0, y: 0, z: 1.60999838 },
      }}
      {...props}
    />
  )
}