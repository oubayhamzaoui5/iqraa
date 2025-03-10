import React, { useEffect, useRef, useState } from 'react';
import styles from './VideoPlayer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';

const VideoPlayer = () => {
  const playerRef = useRef(null);
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');
  const [isMuted, setIsMuted] = useState(false);

  const seekBarRef = useRef(null);
  const volumeBarRef = useRef(null);
  const interval = useRef(null);

  useEffect(() => {
    // Check if YouTube IFrame API is available
    if (!window.YT) {
      console.error('YouTube IFrame API is not loaded.');
      return;
    }

    // Initialize YouTube Player
    window.onYouTubeIframeAPIReady = () => {
      const ytPlayer = new window.YT.Player(playerRef.current, {
        height: '100%',
        width: '100%',
        videoId: '7_s5_jgTvAM', // Replace with your video ID
        playerVars: {
          controls: 0,
          rel: 0,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
      setPlayer(ytPlayer);
    };

    if (window.YT && window.YT.Player) {
      window.onYouTubeIframeAPIReady();
    }
  }, []);

  const onPlayerReady = (event) => {
    const playerInstance = event.target;
    setPlayer(playerInstance);
    setTimeout(() => {
      const duration = playerInstance.getDuration();
      seekBarRef.current.max = duration;
      setDuration(formatTime(duration));
    }, 1000);
  };

  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      interval.current = setInterval(() => {
        const currentTime = player.getCurrentTime();
        seekBarRef.current.value = currentTime;
        setCurrentTime(formatTime(currentTime));
      }, 500);
    } else {
      clearInterval(interval.current);
    }
  };

  const togglePlayPause = () => {
    if (!player) return;

    const playerState = player.getPlayerState?.();
    if (playerState === window.YT.PlayerState.PLAYING) {
      player.pauseVideo();
      setIsPlaying(false);
    } else {
      player.playVideo();
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = () => {
    if (!player) return;

    const volume = volumeBarRef.current.value;
    player.setVolume(volume);
    setVolume(volume);
    setIsMuted(volume === '0');
  };

  const toggleMute = () => {
    if (!player) return;

    if (isMuted) {
      player.unMute();
      setIsMuted(false);
      setVolume(player.getVolume());
    } else {
      player.mute();
      setIsMuted(true);
      setVolume(0);
    }
  };

  const handleSeek = () => {
    if (!player) return;
    player.seekTo(seekBarRef.current.value);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.videoContainer}>
        <div ref={playerRef} id="player"></div>
        <div className={styles.blocker}></div>
      </div>
      <div className={styles.controls}>
        <input
          type="range"
          ref={seekBarRef}
          min="0"
          defaultValue="0"
          step="1"
          onInput={handleSeek}
          className={styles.seekBar}
        />
        <div className={styles.underBar}>
          <div className={styles.volume}>
            <span onClick={toggleMute}>
              <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
            </span>
            <input
              type="range"
              ref={volumeBarRef}
              min="0"
              max="100"
              value={volume}
              onInput={handleVolumeChange}
              className={styles.volumeBar}
            />
          </div>
          <div className={styles.playSection}>
            <button onClick={togglePlayPause} className={styles.playPause}>
              <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
            </button>
            <span>{currentTime}</span> / <span>{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
