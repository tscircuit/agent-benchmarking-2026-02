import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"]
} as const

export const TS_1101_C_W = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C318938"
  ]
}}
      manufacturerPartNumber="TS_1101_C_W"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-3.7999924000000647mm" pcbY="0mm" width="1.8999962mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="3.799992399999951mm" pcbY="0mm" width="1.8999962mm" height="1.499997mm" shape="rect" />
<silkscreenpath route={[{"x":2.8628340000000208,"y":-1.6677894000000606},{"x":-3.1371540000001232,"y":-1.6677894000000606}]} />
<silkscreenpath route={[{"x":-1.153159999999957,"y":0.7442199999999275},{"x":0.8788399999999683,"y":0.7442199999999275},{"x":0.8788399999999683,"y":-0.7797800000000734},{"x":-1.153159999999957,"y":-0.7797800000000734},{"x":-1.153159999999957,"y":0.7442199999999275}]} />
<silkscreenpath route={[{"x":-3.1371540000001232,"y":1.632229400000142},{"x":2.8628340000000208,"y":1.632229400000142}]} />
<silkscreenpath route={[{"x":-3.1371540000001232,"y":1.632229400000142},{"x":-3.1371540000001232,"y":0.9811257999999725}]} />
<silkscreenpath route={[{"x":-3.1371540000001232,"y":-0.9811257999999725},{"x":-3.1371540000001232,"y":-1.6677894000000606}]} />
<silkscreenpath route={[{"x":2.8628340000000208,"y":-1.6677894000000606},{"x":2.8628340000000208,"y":-0.9354311999999254}]} />
<silkscreenpath route={[{"x":2.8628340000000208,"y":0.9354057999998986},{"x":2.8628340000000208,"y":1.632229400000142}]} />
<courtyardoutline outline={[{"x":-4.9997999999999365,"y":1.9010000000000673},{"x":4.9997999999999365,"y":1.9010000000000673},{"x":4.9997999999999365,"y":-1.9263999999999442},{"x":-4.9997999999999365,"y":-1.9263999999999442},{"x":-4.9997999999999365,"y":1.9010000000000673}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C318938.obj?uuid=e88911f9c06f4fc3bae1093a1adc7327",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C318938.step?uuid=e88911f9c06f4fc3bae1093a1adc7327",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -3.3 },
      }}
      {...props}
    />
  )
}