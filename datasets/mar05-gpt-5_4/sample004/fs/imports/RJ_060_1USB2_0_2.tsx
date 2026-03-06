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
  pin13: ["pin13"],
  pin14: ["pin14"],
  pin15: ["P8"],
  pin16: ["P7"],
  pin17: ["P6"],
  pin18: ["P5"],
  pin19: ["P4"],
  pin20: ["P3"],
  pin21: ["P2"],
  pin22: ["P1"],
  pin23: ["P9"],
  pin24: ["P10"],
  pin25: ["P11"],
  pin26: ["P12"]
} as const

export const RJ_060_1USB2_0_2 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C7205180"
  ]
}}
      manufacturerPartNumber="RJ_060_1USB2_0_2"
      footprint={<footprint>
        <platedhole  portHints={["pin8"]} pcbX="9.349993999999924mm" pcbY="-8.690006749999952mm" outerDiameter="2.999994mm" holeDiameter="2.3000207999999995mm" shape="circle" />
<platedhole  portHints={["pin7"]} pcbX="-9.349993999999924mm" pcbY="-8.690006749999952mm" outerDiameter="2.999994mm" holeDiameter="2.3000207999999995mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="3.5001200000001518mm" pcbY="-3.390042749999907mm" outerDiameter="1.499997mm" holeDiameter="0.9000235999999999mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="0.999998000000005mm" pcbY="-3.390042749999907mm" outerDiameter="1.499997mm" holeDiameter="0.9000235999999999mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-0.999998000000005mm" pcbY="-3.390042749999907mm" outerDiameter="1.499997mm" holeDiameter="0.9000235999999999mm" shape="circle" />
<platedhole  portHints={["pin1"]} pcbX="-3.4998659999998836mm" pcbY="-3.390042749999907mm" outerDiameter="1.499997mm" holeDiameter="0.9000235999999999mm" shape="circle" />
<platedhole  portHints={["pin15"]} pcbX="-4.444999999999936mm" pcbY="4.129881250000153mm" outerDiameter="1.499997mm" holeDiameter="0.9000235999999999mm" shape="circle" />
<platedhole  portHints={["pin16"]} pcbX="-3.1749999999999545mm" pcbY="6.6300032500000725mm" outerDiameter="1.499997mm" holeDiameter="0.9000235999999999mm" shape="circle" />
<platedhole  portHints={["pin17"]} pcbX="-1.9049999999997453mm" pcbY="4.129881250000153mm" outerDiameter="1.499997mm" holeDiameter="0.9000235999999999mm" shape="circle" />
<platedhole  portHints={["pin18"]} pcbX="-0.6349999999997635mm" pcbY="6.6300032500000725mm" outerDiameter="1.499997mm" holeDiameter="0.9000235999999999mm" shape="circle" />
<platedhole  portHints={["pin19"]} pcbX="0.6350000000002183mm" pcbY="4.129881250000153mm" outerDiameter="1.499997mm" holeDiameter="0.9000235999999999mm" shape="circle" />
<platedhole  portHints={["pin20"]} pcbX="1.9050000000002mm" pcbY="6.6300032500000725mm" outerDiameter="1.499997mm" holeDiameter="0.9000235999999999mm" shape="circle" />
<platedhole  portHints={["pin21"]} pcbX="3.175000000000182mm" pcbY="4.129881250000153mm" outerDiameter="1.499997mm" holeDiameter="0.9000235999999999mm" shape="circle" />
<platedhole  portHints={["pin22"]} pcbX="4.445000000000164mm" pcbY="6.6300032500000725mm" outerDiameter="1.499997mm" holeDiameter="0.9000235999999999mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="-6.549897999999985mm" pcbY="-6.040024749999816mm" outerDiameter="2.999994mm" holeDiameter="2.3000207999999995mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="6.549898000000212mm" pcbY="-6.040024749999816mm" outerDiameter="2.999994mm" holeDiameter="2.3000207999999995mm" shape="circle" />
<platedhole  portHints={["pin14"]} pcbX="9.349993999999924mm" pcbY="3.9899272500001643mm" outerDiameter="2.999994mm" holeDiameter="2.3000207999999995mm" shape="circle" />
<platedhole  portHints={["pin13"]} pcbX="-9.349993999999924mm" pcbY="4.009993250000093mm" outerDiameter="2.999994mm" holeDiameter="2.3000207999999995mm" shape="circle" />
<platedhole  portHints={["pin23"]} pcbX="7.100062000000207mm" pcbY="9.440005250000127mm" outerDiameter="1.499997mm" holeDiameter="0.9000235999999999mm" shape="circle" />
<platedhole  portHints={["pin24"]} pcbX="4.5999400000000605mm" pcbY="9.440005250000127mm" outerDiameter="1.499997mm" holeDiameter="0.9000235999999999mm" shape="circle" />
<platedhole  portHints={["pin25"]} pcbX="-4.5999400000000605mm" pcbY="9.440005250000127mm" outerDiameter="1.499997mm" holeDiameter="0.9000235999999999mm" shape="circle" />
<platedhole  portHints={["pin26"]} pcbX="-7.1000619999997525mm" pcbY="9.440005250000127mm" outerDiameter="1.499997mm" holeDiameter="0.9000235999999999mm" shape="circle" />
<silkscreenpath route={[{"x":9.399981200000184,"y":-10.369454749999932},{"x":9.399981200000184,"y":-16.72504274999983},{"x":-9.399981199999957,"y":-16.72504274999983}]} />
<silkscreenpath route={[{"x":9.399981200000184,"y":2.310530050000125},{"x":9.399981200000184,"y":-7.010660349999853}]} />
<silkscreenpath route={[{"x":-9.399981199999957,"y":5.689339650000193},{"x":-9.399981199999957,"y":10.774902250000196},{"x":9.399981200000184,"y":10.774902250000196},{"x":9.399981200000184,"y":5.669324450000204}]} />
<silkscreenpath route={[{"x":-9.399981199999957,"y":-7.010660349999853},{"x":-9.399981199999957,"y":2.330545250000114}]} />
<silkscreenpath route={[{"x":-9.399981199999957,"y":-16.72504274999983},{"x":-9.399981199999957,"y":-10.369454749999932}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=4a85f7ae719540c6883f8b00d1163f7e&pn=C7205180",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 2.2737367544323206e-13, y: -2.9499877499998775, z: -9.390003750000016 },
      }}
      {...props}
    />
  )
}