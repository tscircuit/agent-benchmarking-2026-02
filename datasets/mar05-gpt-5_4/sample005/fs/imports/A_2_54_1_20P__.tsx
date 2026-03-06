import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["pin9"],
  pin10: ["pin10"],
  pin11: ["pin11"],
  pin12: ["pin12"],
  pin13: ["pin13"],
  pin14: ["pin14"],
  pin15: ["pin15"],
  pin16: ["pin16"],
  pin17: ["pin17"],
  pin18: ["pin18"],
  pin19: ["pin19"],
  pin20: ["pin20"]
} as const

export const A_2_54_1_20P__ = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C50981"
  ]
}}
      manufacturerPartNumber="A_2_54_1_20P__"
      footprint={<footprint>
        <platedhole  portHints={["pin20"]} pcbX="24.129999999999995mm" pcbY="0mm" outerDiameter="1.7999964mm" holeDiameter="1.1999975999999999mm" shape="circle" />
<platedhole  portHints={["pin19"]} pcbX="21.590000000000032mm" pcbY="0mm" outerDiameter="1.7999964mm" holeDiameter="1.1999975999999999mm" shape="circle" />
<platedhole  portHints={["pin18"]} pcbX="19.05000000000001mm" pcbY="0mm" outerDiameter="1.7999964mm" holeDiameter="1.1999975999999999mm" shape="circle" />
<platedhole  portHints={["pin17"]} pcbX="16.50999999999999mm" pcbY="0mm" outerDiameter="1.7999964mm" holeDiameter="1.1999975999999999mm" shape="circle" />
<platedhole  portHints={["pin16"]} pcbX="13.970000000000027mm" pcbY="0mm" outerDiameter="1.7999964mm" holeDiameter="1.1999975999999999mm" shape="circle" />
<platedhole  portHints={["pin15"]} pcbX="11.430000000000007mm" pcbY="0mm" outerDiameter="1.7999964mm" holeDiameter="1.1999975999999999mm" shape="circle" />
<platedhole  portHints={["pin14"]} pcbX="8.890000000000043mm" pcbY="0mm" outerDiameter="1.7999964mm" holeDiameter="1.1999975999999999mm" shape="circle" />
<platedhole  portHints={["pin13"]} pcbX="6.350000000000023mm" pcbY="0mm" outerDiameter="1.7999964mm" holeDiameter="1.1999975999999999mm" shape="circle" />
<platedhole  portHints={["pin12"]} pcbX="3.8100000000000023mm" pcbY="0mm" outerDiameter="1.7999964mm" holeDiameter="1.1999975999999999mm" shape="circle" />
<platedhole  portHints={["pin11"]} pcbX="1.2700000000000387mm" pcbY="0mm" outerDiameter="1.7999964mm" holeDiameter="1.1999975999999999mm" shape="circle" />
<platedhole  portHints={["pin10"]} pcbX="-1.2699999999999818mm" pcbY="0mm" outerDiameter="1.7999964mm" holeDiameter="1.1999975999999999mm" shape="circle" />
<platedhole  portHints={["pin9"]} pcbX="-3.8100000000000023mm" pcbY="0mm" outerDiameter="1.7999964mm" holeDiameter="1.1999975999999999mm" shape="circle" />
<platedhole  portHints={["pin8"]} pcbX="-6.349999999999966mm" pcbY="0mm" outerDiameter="1.7999964mm" holeDiameter="1.1999975999999999mm" shape="circle" />
<platedhole  portHints={["pin7"]} pcbX="-8.889999999999986mm" pcbY="0mm" outerDiameter="1.7999964mm" holeDiameter="1.1999975999999999mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="-11.430000000000007mm" pcbY="0mm" outerDiameter="1.7999964mm" holeDiameter="1.1999975999999999mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="-13.96999999999997mm" pcbY="0mm" outerDiameter="1.7999964mm" holeDiameter="1.1999975999999999mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="-16.50999999999999mm" pcbY="0mm" outerDiameter="1.7999964mm" holeDiameter="1.1999975999999999mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="-19.049999999999955mm" pcbY="0mm" outerDiameter="1.7999964mm" holeDiameter="1.1999975999999999mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-21.589999999999975mm" pcbY="0mm" outerDiameter="1.7999964mm" holeDiameter="1.1999975999999999mm" shape="circle" />
<platedhole  portHints={["pin1"]} pcbX="-24.129999999999995mm" pcbY="0mm" outerDiameter="1.7999964mm" holeDiameter="1.1999975999999999mm" shape="circle" />
<silkscreenpath route={[{"x":-22.859949200000017,"y":1.2499848000000071},{"x":-22.859949200000017,"y":-1.2500101999999913}]} />
<silkscreenpath route={[{"x":-25.39994919999998,"y":-1.2500101999999913},{"x":25.399949200000037,"y":-1.2500101999999913}]} />
<silkscreenpath route={[{"x":-25.39994919999998,"y":1.2499848000000071},{"x":-25.39994919999998,"y":-1.2500101999999913}]} />
<silkscreenpath route={[{"x":25.399949200000037,"y":1.2499848000000071},{"x":-25.39994919999998,"y":1.2499848000000071}]} />
<silkscreenpath route={[{"x":25.399949200000037,"y":-1.2500101999999913},{"x":25.399949200000037,"y":1.2499848000000071}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=a8300d63cdc6468ea497a403784930e4&pn=C50981",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: -0.09999819999999882 },
      }}
      {...props}
    />
  )
}