import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["K"],
  pin2: ["A"]
} as const

export const XL_1608SYGC_06 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C965805"
  ]
}}
      manufacturerPartNumber="XL_1608SYGC_06"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-0.799464999999941mm" pcbY="-0.003428999999982807mm" width="0.7999983999999999mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="0.7994650000000547mm" pcbY="0.003428999999982807mm" width="0.7999983999999999mm" height="0.7999983999999999mm" shape="rect" />
<silkscreenpath route={[{"x":0.24043639999990774,"y":0.7565136000000621},{"x":1.390497600000117,"y":0.7565136000000621}]} />
<silkscreenpath route={[{"x":0.24043639999990774,"y":-0.7436103999999659},{"x":1.390497600000117,"y":-0.7436103999999659}]} />
<silkscreenpath route={[{"x":1.390497600000117,"y":0.7564628000000084},{"x":1.390497600000117,"y":-0.7235189999998966}]} />
<silkscreenpath route={[{"x":-0.13957299999992756,"y":-0.7458963999999924},{"x":-1.189685200000099,"y":-0.7458963999999924}]} />
<silkscreenpath route={[{"x":-1.4896337999999787,"y":-0.345795599999974},{"x":-1.4896337999999787,"y":-0.4458207999998649},{"x":-1.189685200000099,"y":-0.7458963999999924}]} />
<silkscreenpath route={[{"x":-1.4896337999999787,"y":0.3541268000000173},{"x":-1.4896337999999787,"y":-0.345795599999974}]} />
<silkscreenpath route={[{"x":-1.4896337999999787,"y":0.3541268000000173},{"x":-1.4896337999999787,"y":0.4542790000000423},{"x":-1.189685200000099,"y":0.7542276000000356}]} />
<silkscreenpath route={[{"x":-0.13957299999992756,"y":0.7542276000000356},{"x":-1.189685200000099,"y":0.7542276000000356}]} />
<courtyardoutline outline={[{"x":-1.7385670000001028,"y":1.0184769999999617},{"x":1.631633000000079,"y":1.0184769999999617},{"x":1.631633000000079,"y":-0.980122999999935},{"x":-1.7385670000001028,"y":-0.980122999999935},{"x":-1.7385670000001028,"y":1.0184769999999617}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C965805.obj?uuid=6f130ed341a94a9faf4a4c2e249f3fd3",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C965805.step?uuid=6f130ed341a94a9faf4a4c2e249f3fd3",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.01 },
      }}
      {...props}
    />
  )
}