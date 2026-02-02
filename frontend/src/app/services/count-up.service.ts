import { Injectable } from '@angular/core';
import { interval, map, takeWhile } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountUpService {
  countUp(target: number, duration = 2000) {
    const frameRate = 16;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    return interval(frameRate).pipe(
      map(() => {
        frame++;
        return Math.round((target * frame) / totalFrames);
      }),
      takeWhile(() => frame <= totalFrames)
    );
  }
}
