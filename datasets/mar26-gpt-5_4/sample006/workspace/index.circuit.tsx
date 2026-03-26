import { MicroXNJ } from "./imports/MicroXNJ"
import { RP2040 } from "./imports/RP2040"
import { W25Q16JVSNIQ } from "./imports/W25Q16JVSNIQ"
import { X322512MSB4SI } from "./imports/X322512MSB4SI"
import { XC6206P332MR_G } from "./imports/XC6206P332MR_G"

export default function RP2040Breakout() {
  return (
    <board width="22mm" height="60mm">
      <MicroXNJ
        name="J1"
        pcbX="0mm"
        pcbY="-27.2mm"
        pcbRotation={180}
        shouldBeOnEdgeOfBoard
        connections={{
          VBUS: "net.VBUS",
          GND: "net.GND",
          SH1: "net.GND",
          SH2: "net.GND",
          SH3: "net.GND",
          SH4: "net.GND",
        }}
      />

      <XC6206P332MR_G
        name="U2"
        pcbX="-5.8mm"
        pcbY="-19.8mm"
        pcbRotation={180}
        connections={{
          Vin: "net.VBUS",
          GND: "net.GND",
          Vout: "net.V3_3",
        }}
      />
      <capacitor
        name="C1"
        capacitance="1uF"
        footprint="0402"
        pcbX="-8.3mm"
        pcbY="-19.8mm"
        connections={{ pin1: "net.VBUS", pin2: "net.GND" }}
      />
      <capacitor
        name="C2"
        capacitance="1uF"
        footprint="0402"
        pcbX="-2.8mm"
        pcbY="-19.8mm"
        connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
      />
      <capacitor
        name="C3"
        capacitance="10uF"
        footprint="0603"
        pcbX="-2.8mm"
        pcbY="-17.4mm"
        connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
      />

      <resistor
        name="R1"
        resistance="27ohm"
        footprint="0402"
        pcbX="-1.4mm"
        pcbY="-16.6mm"
        pcbRotation={90}
        connections={{ pin1: ".J1 > .D_NEG", pin2: ".U1 > .USB_DM" }}
      />
      <resistor
        name="R2"
        resistance="27ohm"
        footprint="0402"
        pcbX="1.4mm"
        pcbY="-16.6mm"
        pcbRotation={90}
        connections={{ pin1: ".J1 > .D_POS", pin2: ".U1 > .USB_DP" }}
      />

      <RP2040
        name="U1"
        pcbX="0mm"
        pcbY="-6mm"
        pcbRotation={0}
        connections={{
          IOVDD1: "net.V3_3",
          IOVDD2: "net.V3_3",
          IOVDD3: "net.V3_3",
          IOVDD4: "net.V3_3",
          IOVDD5: "net.V3_3",
          IOVDD6: "net.V3_3",
          ADC_AVDD: "net.V3_3",
          USB_VDD: "net.V3_3",
          VREG_IN: "net.V3_3",
          DVDD1: ".U1 > .VREG_VOUT",
          DVDD2: ".U1 > .VREG_VOUT",
          TESTEN: "net.GND",
          GND: "net.GND",
        }}
      />

      <capacitor
        name="C4"
        capacitance="1uF"
        footprint="0402"
        pcbX="3.7mm"
        pcbY="-11.2mm"
        connections={{ pin1: ".U1 > .VREG_VOUT", pin2: "net.GND" }}
      />
      <capacitor
        name="C5"
        capacitance="100nF"
        footprint="0402"
        pcbX="6.2mm"
        pcbY="-10.8mm"
        connections={{ pin1: ".U1 > .ADC_AVDD", pin2: "net.GND" }}
      />
      <capacitor
        name="C6"
        capacitance="100nF"
        footprint="0402"
        pcbX="-5.2mm"
        pcbY="-0.8mm"
        connections={{ pin1: ".U1 > .IOVDD6", pin2: "net.GND" }}
      />
      <capacitor
        name="C7"
        capacitance="100nF"
        footprint="0402"
        pcbX="-5.2mm"
        pcbY="-2.8mm"
        connections={{ pin1: ".U1 > .IOVDD5", pin2: "net.GND" }}
      />
      <capacitor
        name="C8"
        capacitance="100nF"
        footprint="0402"
        pcbX="-5.2mm"
        pcbY="-4.8mm"
        connections={{ pin1: ".U1 > .IOVDD4", pin2: "net.GND" }}
      />
      <capacitor
        name="C9"
        capacitance="100nF"
        footprint="0402"
        pcbX="5.2mm"
        pcbY="-0.8mm"
        connections={{ pin1: ".U1 > .IOVDD2", pin2: "net.GND" }}
      />
      <capacitor
        name="C10"
        capacitance="100nF"
        footprint="0402"
        pcbX="5.2mm"
        pcbY="-4.2mm"
        connections={{ pin1: ".U1 > .IOVDD3", pin2: "net.GND" }}
      />
      <capacitor
        name="C11"
        capacitance="100nF"
        footprint="0402"
        pcbX="0mm"
        pcbY="1.2mm"
        connections={{ pin1: ".U1 > .IOVDD1", pin2: "net.GND" }}
      />
      <capacitor
        name="C12"
        capacitance="100nF"
        footprint="0402"
        pcbX="2.2mm"
        pcbY="1.2mm"
        connections={{ pin1: ".U1 > .USB_VDD", pin2: "net.GND" }}
      />

      <W25Q16JVSNIQ
        name="U3"
        pcbX="6.3mm"
        pcbY="-5.5mm"
        pcbRotation={90}
        connections={{
          VCC: "net.V3_3",
          GND: "net.GND",
          CS: ".U1 > .QSPI_SS",
          CLK: ".U1 > .QSPI_SCLK",
          pin2: ".U1 > .QSPI_SD1",
          pin3: ".U1 > .QSPI_SD2",
          pin5: ".U1 > .QSPI_SD0",
          pin7: ".U1 > .QSPI_SD3",
        }}
      />
      <resistor
        name="R3"
        resistance="10k"
        footprint="0402"
        pcbX="8.9mm"
        pcbY="-5.5mm"
        pcbRotation={90}
        connections={{ pin1: ".U1 > .QSPI_SS", pin2: "net.V3_3" }}
      />

      <X322512MSB4SI
        name="Y1"
        pcbX="0mm"
        pcbY="7mm"
        connections={{
          OSC1: ".U1 > .XIN",
          OSC2: ".U1 > .XOUT",
          GND1: "net.GND",
          GND2: "net.GND",
        }}
      />
      <capacitor
        name="C13"
        capacitance="12pF"
        footprint="0402"
        pcbX="-2.8mm"
        pcbY="9.6mm"
        connections={{ pin1: ".U1 > .XIN", pin2: "net.GND" }}
      />
      <capacitor
        name="C14"
        capacitance="12pF"
        footprint="0402"
        pcbX="2.8mm"
        pcbY="9.6mm"
        connections={{ pin1: ".U1 > .XOUT", pin2: "net.GND" }}
      />

      <resistor
        name="R4"
        resistance="10k"
        footprint="0402"
        pcbX="-5.8mm"
        pcbY="12.8mm"
        pcbRotation={90}
        connections={{ pin1: ".U1 > .RUN", pin2: "net.V3_3" }}
      />

      <resistor
        name="R5"
        resistance="1k"
        footprint="0402"
        pcbX="3.5mm"
        pcbY="20.5mm"
        pcbRotation={90}
        connections={{ pin1: ".U1 > .GPIO25", pin2: ".D1 > .anode" }}
      />
      <led
        name="D1"
        color="green"
        footprint="0603"
        pcbX="6mm"
        pcbY="20.5mm"
        pcbRotation={90}
        connections={{ cathode: "net.GND" }}
      />

      <pinheader
        name="J2"
        pinCount={20}
        pitch="2.54mm"
        pcbX="-8.9mm"
        pcbY="0mm"
        pcbRotation={90}
        pinLabels={[
          "3V3",
          "GND",
          "GPIO0",
          "GPIO1",
          "GPIO2",
          "GPIO3",
          "GPIO4",
          "GPIO5",
          "GPIO6",
          "GPIO7",
          "GPIO8",
          "GPIO9",
          "GPIO10",
          "GPIO11",
          "GPIO12",
          "GPIO13",
          "GPIO14",
          "GPIO15",
          "SWCLK",
          "SWD",
        ]}
        connections={{
          pin1: "net.V3_3",
          pin2: "net.GND",
          pin3: ".U1 > .GPIO0",
          pin4: ".U1 > .GPIO1",
          pin5: ".U1 > .GPIO2",
          pin6: ".U1 > .GPIO3",
          pin7: ".U1 > .GPIO4",
          pin8: ".U1 > .GPIO5",
          pin9: ".U1 > .GPIO6",
          pin10: ".U1 > .GPIO7",
          pin11: ".U1 > .GPIO8",
          pin12: ".U1 > .GPIO9",
          pin13: ".U1 > .GPIO10",
          pin14: ".U1 > .GPIO11",
          pin15: ".U1 > .GPIO12",
          pin16: ".U1 > .GPIO13",
          pin17: ".U1 > .GPIO14",
          pin18: ".U1 > .GPIO15",
          pin19: ".U1 > .SWCLK",
          pin20: ".U1 > .SWD",
        }}
      />

      <pinheader
        name="J3"
        pinCount={20}
        pitch="2.54mm"
        pcbX="8.9mm"
        pcbY="0mm"
        pcbRotation={90}
        pinLabels={[
          "VBUS",
          "GND",
          "GPIO16",
          "GPIO17",
          "GPIO18",
          "GPIO19",
          "GPIO20",
          "GPIO21",
          "GPIO22",
          "GPIO23",
          "GPIO24",
          "GPIO25",
          "GPIO26",
          "GPIO27",
          "GPIO28",
          "GPIO29",
          "RUN",
          "BOOTSEL",
          "3V3",
          "GND",
        ]}
        connections={{
          pin1: "net.VBUS",
          pin2: "net.GND",
          pin3: ".U1 > .GPIO16",
          pin4: ".U1 > .GPIO17",
          pin5: ".U1 > .GPIO18",
          pin6: ".U1 > .GPIO19",
          pin7: ".U1 > .GPIO20",
          pin8: ".U1 > .GPIO21",
          pin9: ".U1 > .GPIO22",
          pin10: ".U1 > .GPIO23",
          pin11: ".U1 > .GPIO24",
          pin12: ".U1 > .GPIO25",
          pin13: ".U1 > .GPIO26_ADC0",
          pin14: ".U1 > .GPIO27_ADC1",
          pin15: ".U1 > .GPIO28_ADC2",
          pin16: ".U1 > .GPIO29_ADC3",
          pin17: ".U1 > .RUN",
          pin18: ".U1 > .QSPI_SS",
          pin19: "net.V3_3",
          pin20: "net.GND",
        }}
      />
    </board>
  )
}
