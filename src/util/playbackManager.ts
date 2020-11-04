class PlaybackManager {
    public currentTime: number;
    private maxDuration: number;
    private isPause: boolean;
    private timerId: any;

    constructor() {
        this.currentTime = 0;
        this.maxDuration = 0;
        this.isPause = true;
        this.timerId = 0;
    }

    public play = (changeCurrentPlaybackTime: any, pause: any, totalDuration: number) => {
            if (!this.timerId) {
                this.isPause = false;
                this.maxDuration = totalDuration;
                this.timerId = setInterval(() => {
                    if (!this.isPause && this.currentTime < this.maxDuration) {
                        this.currentTime++;
                        changeCurrentPlaybackTime(this.currentTime);
                    } else if (this.currentTime >= this.maxDuration) {
                        pause();
                    }
                }, 1000);
            }
    }

    public pause = () => {
        if (this.timerId) {
            this.isPause = true;
        }
    }

    public continue = () => {
        if (this.timerId) {
            this.isPause = false;
        }
    }

    public reset = (onChangeCurrentPlaybackTime: any) => {
        if (this.timerId) {
            this.isPause = true;
            this.currentTime = 0;
            onChangeCurrentPlaybackTime(this.currentTime);

            clearInterval(this.timerId);
            this.timerId = 0;
        }
    }
}

export const playbackManager = new PlaybackManager();
