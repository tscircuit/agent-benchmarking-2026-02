import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["K"],
  pin2: ["A"]
} as const

export const XL_1608UGC_06A = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C7371903"
  ]
}}
      manufacturerPartNumber="XL_1608UGC_06A"
      footprint={<footprint>
        <smtpad portHints={["pin2"]} pcbX="0.850010999999995mm" pcbY="0mm" width="0.899922mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-0.850010999999995mm" pcbY="0mm" width="0.899922mm" height="0.9999979999999999mm" shape="rect" />
<silkscreenpath route={[{"x":1.7500599999999622,"y":0.35001199999999244},{"x":1.7500599999999622,"y":0.45003719999988334},{"x":1.4501114000000825,"y":0.7500619999999572}]} />
<silkscreenpath route={[{"x":1.7500599999999622,"y":-0.34991039999999884},{"x":1.7500599999999622,"y":-0.45006260000013754},{"x":1.4501114000000825,"y":-0.7500112000000172}]} />
<silkscreenpath route={[{"x":1.7500599999999622,"y":-0.34991039999999884},{"x":1.7500599999999622,"y":0.35001199999999244}]} />
<silkscreenpath route={[{"x":-1.549958800000013,"y":-0.7498841999999968},{"x":-1.549958800000013,"y":0.7300213999999414}]} />
<silkscreenpath route={[{"x":0.3001009999999269,"y":0.7500619999999572},{"x":1.4501114000000825,"y":0.7500619999999572}]} />
<silkscreenpath route={[{"x":0.3001009999999269,"y":-0.7500112000000172},{"x":1.4501114000000825,"y":-0.7500112000000172}]} />
<silkscreenpath route={[{"x":-0.2999232000000802,"y":0.7500619999999572},{"x":-1.549958800000013,"y":0.7500619999999572}]} />
<silkscreenpath route={[{"x":-0.2999232000000802,"y":-0.7500112000000172},{"x":-1.549958800000013,"y":-0.7500112000000172}]} />
<silkscreenpath route={[{"x":-0.1269999999999527,"y":0.3809999999999718},{"x":-0.1269999999999527,"y":-0.3810000000000855}]} />
<silkscreenpath route={[{"x":-0.1269999999999527,"y":-0.006400800000051277},{"x":0.1269999999999527,"y":-0.006400800000051277}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=2ebc4a8ea21245f5bc7611f9636324a7&pn=C7371903",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 1.1368683772161603e-13, y: 0, z: 0.3000009999999975 },
      }}
      {...props}
    />
  )
}