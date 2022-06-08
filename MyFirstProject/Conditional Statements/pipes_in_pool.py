volume = int(input())
pipe1 = int(input())
pipe2 = int(input())
hours = float(input())
volume_pipe1 = hours * pipe1
volume_pipe2 = hours * pipe2
total_volume = volume_pipe1 + volume_pipe2
if volume >= total_volume :
    print(f'The pool is {(total_volume/volume)*100:.2f}% full. Pipe 1: {(volume_pipe1/total_volume)*100:.2f}%. Pipe 2: {(volume_pipe2/total_volume)*100:.2f}%.')
else:
    print(f'For {hours:.2f} hours the pool overflows with {total_volume-volume:.2f} liters.')