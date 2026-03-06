import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["K"],
  pin2: ["A"]
} as const

export const NCD0805C1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C84257"
  ]
}}
      manufacturerPartNumber="NCD0805C1"
      footprint={<footprint>
        <smtpad portHints={["pin2"]} pcbX="1.1000740000000633mm" pcbY="0mm" width="0.9999979999999999mm" height="1.2500101999999997mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-1.1000740000000633mm" pcbY="0mm" width="0.9999979999999999mm" height="1.2500101999999997mm" shape="rect" />
<silkscreenpath route={[{"x":0.4999735999999757,"y":0.9499091999999791},{"x":1.980056999999988,"y":0.9598913999999468}]} />
<silkscreenpath route={[{"x":0.6400545999999849,"y":-0.9401047999999719},{"x":1.980056999999988,"y":-0.9401047999999719}]} />
<silkscreenpath route={[{"x":1.980056999999988,"y":0.9598913999999468},{"x":1.980056999999988,"y":-0.9401302000001124}]} />
<silkscreenpath route={[{"x":-1.7500600000000759,"y":-0.95011240000008},{"x":-1.7500600000000759,"y":-0.9500616000000264},{"x":-2.099995799999988,"y":-0.6001258000001144}]} />
<silkscreenpath route={[{"x":-1.7500600000000759,"y":0.9499091999999791},{"x":-1.7500600000000759,"y":0.9498583999999255},{"x":-2.099995799999988,"y":0.5999226000000135}]} />
<silkscreenpath route={[{"x":-0.500024400000143,"y":0.9499091999999791},{"x":-1.7500600000000759,"y":0.9499091999999791}]} />
<silkscreenpath route={[{"x":-0.500024400000143,"y":-0.95011240000008},{"x":-1.7500600000000759,"y":-0.95011240000008}]} />
<silkscreenpath route={[{"x":-2.099995799999988,"y":0.5999226000000135},{"x":-2.099995799999988,"y":-0.6001258000001144}]} />
<silkscreenpath route={[{"x":0.30005019999998694,"y":0.49989740000000893},{"x":0.30005019999998694,"y":-0.5001006000001098}]} />
<silkscreenpath route={[{"x":0.30005019999998694,"y":-0.005156199999987621},{"x":-0.19994880000001558,"y":-0.005156199999987621}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=23093642268545519703b953fc993978&pn=C84257",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0.00005079999993995443, y: -0.0001015999999935957, z: 0.17499490000004703 },
      }}
      {...props}
    />
  )
}