# problema gas station
# Input: ["4","1:1","2:2","1:2","0:1"]
# Output: imposible

# Input: ["4","0:1","2:2","1:2","3:1"]
# Output: 4

def GasStation(strArr):
  n_gas_stations = strArr[0]
  # print(n_gas_stations)
  # print(circular_rotation(strArr[1:]))
  samples_to_test = circular_rotation(strArr[1:])
  possible_solutions = []
  for i, sample in enumerate(samples_to_test):
    current_gallons = 0
    for j, station in enumerate(sample):
      gallons_and_steps_to_next_station = station.split(":")

      gallons = int(gallons_and_steps_to_next_station[0])
      steps_to_next_station = int(gallons_and_steps_to_next_station[1])
      current_gallons += gallons 
      current_gallons -= steps_to_next_station
      if current_gallons < 0:
        break
      if j == len(sample) - 1:
        possible_solutions.append(i + 1)
      
  if len(possible_solutions) > 0:
    return str(possible_solutions[0])
  else:
    return 'impossible'


  # code goes here
  # return strArr

def circular_rotation(lst):
  n = len(lst)
  return [lst[i:] + lst[:i] for i in range(n)]

# keep this function call here
# test = ["4","0:1","2:2","1:2","3:1"]
# print(GasStation(test))
print(GasStation(input()))


## optimizacion o(n) de la funcion

def GasStation(strArr):
    n = int(strArr[0])
    stations = []

    for s in strArr[1:]:
        gas, cost = map(int, s.split(":"))
        stations.append((gas, cost))

    total_tank = 0
    current_tank = 0
    start_index = 0

    for i in range(n):
        gas, cost = stations[i]
        diff = gas - cost

        total_tank += diff
        current_tank += diff

        if current_tank < 0:
            start_index = i + 1
            current_tank = 0

    return str(start_index + 1) if total_tank >= 0 else "impossible"

