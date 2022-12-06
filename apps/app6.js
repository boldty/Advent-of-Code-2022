function run1(input) {
  return getPacketMarkerIndex(input, 4);
}

function run2(input) {
  return getPacketMarkerIndex(input, 14);
}

function getPacketMarkerIndex(input, packetLength) {
  for (let i = 0; i + packetLength < input.length; i++) {
    const endOfMarker = i + packetLength;
    let string = input.substring(i, endOfMarker);
    if (new Set(string).size == string.length) {
      return endOfMarker;
    }
  }
}

export { run1, run2 };
