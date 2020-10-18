const domain = 'meet.jit.si';
var config = {
    defaultLanguage: 'fr',

};
var interfaceConfig = {
    // TO FIX: this needs to be handled from SASS variables. There are some
    // methods allowing to use variables both in css and js.
    DEFAULT_BACKGROUND: '#32aaff',

    /**
     * Whether or not the blurred video background for large video should be
     * displayed on browsers that can support it.
     */
    DISABLE_VIDEO_BACKGROUND: false,

    INITIAL_TOOLBAR_TIMEOUT: 0,
    TOOLBAR_TIMEOUT: 0,
    TOOLBAR_ALWAYS_VISIBLE: false,
    DEFAULT_REMOTE_DISPLAY_NAME: 'ailleurs',
    DEFAULT_LOCAL_DISPLAY_NAME: 'ici',
    SHOW_JITSI_WATERMARK: false,
    JITSI_WATERMARK_LINK: 'http://alexsolex.com',

    // if watermark is disabled by default, it can be shown only for guests
    SHOW_WATERMARK_FOR_GUESTS: false,
    SHOW_BRAND_WATERMARK: true,
    BRAND_WATERMARK_LINK: 'http://alexsolex.com/theme/alexsolex/bg.jpg',
    SHOW_POWERED_BY: false, //ok
    SHOW_DEEP_LINKING_IMAGE: true,
    GENERATE_ROOMNAMES_ON_WELCOME_PAGE: true,
    DISPLAY_WELCOME_PAGE_CONTENT: false,
    DISPLAY_WELCOME_PAGE_TOOLBAR_ADDITIONAL_CONTENT: false,
    APP_NAME: 'Rimbaud APP_NAME',
    NATIVE_APP_NAME: 'Rimbaud NATIVE_APP_NAME',
    PROVIDER_NAME: 'HackArdennes',
    LANG_DETECTION: true, // Allow i18n to detect the system language
    INVITATION_POWERED_BY: false,

    /**
     * If we should show authentication block in profile
     */
    AUTHENTICATION_ENABLE: false,

    /**
     * The name of the toolbar buttons to display in the toolbar. If present,
     * the button will display. Exceptions are "livestreaming" and "recording"
     * which also require being a moderator and some values in config.js to be
     * enabled. Also, the "profile" button will not display for user's with a
     * jwt.
     */
    TOOLBAR_BUTTONS: [
        'microphone', 'camera', 'hangup', 'profile', 'recording', 'sharedvideo', 
        'videoquality', 'filmstrip', 'stats', 'shortcuts',
        'tileview', 'help'
    ],

    SETTINGS_SECTIONS: [ ],

    // Determines how the video would fit the screen. 'both' would fit the whole
    // screen, 'height' would fit the original video height to the height of the
    // screen, 'width' would fit the original video width to the width of the
    // screen respecting ratio.
    VIDEO_LAYOUT_FIT: 'both',

    /**
     * Whether to only show the filmstrip (and hide the toolbar).
     */
    filmStripOnly: false,

    /**
     * Whether to show thumbnails in filmstrip as a column instead of as a row.
     */
    VERTICAL_FILMSTRIP: false,

    // A html text to be shown to guests on the close page, false disables it
    CLOSE_PAGE_GUEST_HINT: true,
    RANDOM_AVATAR_URL_PREFIX: false,
    RANDOM_AVATAR_URL_SUFFIX: false,
    FILM_STRIP_MAX_HEIGHT: 120,

    // Enables feedback star animation.
    ENABLE_FEEDBACK_ANIMATION: false,
    DISABLE_FOCUS_INDICATOR: false,
    DISABLE_DOMINANT_SPEAKER_INDICATOR: false,

    /**
     * Whether the speech to text transcription subtitles panel is disabled.
     * If {@code undefined}, defaults to {@code false}.
     *
     * @type {boolean}
     */
    DISABLE_TRANSCRIPTION_SUBTITLES: false,

    /**
     * Whether the ringing sound in the call/ring overlay is disabled. If
     * {@code undefined}, defaults to {@code false}.
     *
     * @type {boolean}
     */
    DISABLE_RINGING: false,
    AUDIO_LEVEL_PRIMARY_COLOR: 'rgba(255,255,255,0.4)',
    AUDIO_LEVEL_SECONDARY_COLOR: 'rgba(255,255,255,0.2)',
    POLICY_LOGO: null,
    LOCAL_THUMBNAIL_RATIO: 16 / 9, // 16:9
    REMOTE_THUMBNAIL_RATIO: 1, // 1:1
    // Documentation reference for the live streaming feature.
    LIVE_STREAMING_HELP_LINK: 'https://jitsi.org/live',

    /**
     * Whether the mobile app Jitsi Meet is to be promoted to participants
     * attempting to join a conference in a mobile Web browser. If
     * {@code undefined}, defaults to {@code true}.
     *
     * @type {boolean}
     */
    MOBILE_APP_PROMO: true,

    /**
     * Maximum coeficient of the ratio of the large video to the visible area
     * after the large video is scaled to fit the window.
     *
     * @type {number}
     */
    MAXIMUM_ZOOMING_COEFFICIENT: 1.3,

    /*
    * If indicated some of the error dialogs may point to the support URL for
    * help.
    */
    SUPPORT_URL: 'https://github.com/jitsi/jitsi-meet/issues/new',

    /**
     * Whether the connection indicator icon should hide itself based on
     * connection strength. If true, the connection indicator will remain
     * displayed while the participant has a weak connection and will hide
     * itself after the CONNECTION_INDICATOR_HIDE_TIMEOUT when the connection is
     * strong.
     *
     * @type {boolean}
     */
    CONNECTION_INDICATOR_AUTO_HIDE_ENABLED: true,

    /**
     * How long the connection indicator should remain displayed before hiding.
     * Used in conjunction with CONNECTION_INDICATOR_AUTOHIDE_ENABLED.
     *
     * @type {number}
     */
    CONNECTION_INDICATOR_AUTO_HIDE_TIMEOUT: 5000,

    /**
     * If true, hides the connection indicators completely.
     *
     * @type {boolean}
     */
    CONNECTION_INDICATOR_DISABLED: false,

    /**
     * If true, hides the video quality label indicating the resolution status
     * of the current large video.
     *
     * @type {boolean}
     */
    VIDEO_QUALITY_LABEL_DISABLED: false,

    /**
     * If true, will display recent list
     *
     * @type {boolean}
     */
    RECENT_LIST_ENABLED: true,

    // Names of browsers which should show a warning stating the current browser
    // has a suboptimal experience. Browsers which are not listed as optimal or
    // unsupported are considered suboptimal. Valid values are:
    // chrome, chromium, edge, electron, firefox, nwjs, opera, safari
    OPTIMAL_BROWSERS: [ 'chrome', 'chromium', 'firefox', 'nwjs', 'electron' ],

    // Browsers, in addition to those which do not fully support WebRTC, that
    // are not supported and should show the unsupported browser page.
    UNSUPPORTED_BROWSERS: [],

    /**
     * A UX mode where the last screen share participant is automatically
     * pinned. Valid values are the string "remote-only" so remote participants
     * get pinned but not local, otherwise any truthy value for all participants,
     * and any falsy value to disable the feature.
     *
     * Note: this mode is experimental and subject to breakage.
     */
    AUTO_PIN_LATEST_SCREEN_SHARE: 'remote-only',

    /**
     * How many columns the tile view can expand to. The respected range is
     * between 1 and 5.
     */
    // TILE_VIEW_MAX_COLUMNS: 5,

    /**
     * Specify custom URL for downloading android mobile app.
     */
    // MOBILE_DOWNLOAD_LINK_ANDROID: 'https://play.google.com/store/apps/details?id=org.jitsi.meet',

    /**
     * Specify URL for downloading ios mobile app.
     */
    // MOBILE_DOWNLOAD_LINK_IOS: 'https://itunes.apple.com/us/app/jitsi-meet/id1165103905',

    /**
     * Specify mobile app scheme for opening the app from the mobile browser.
     */
    // APP_SCHEME: 'org.jitsi.meet',

    /**
     * Specify the Android app package name.
     */
    // ANDROID_APP_PACKAGE: 'org.jitsi.meet',

    /**
     * Override the behavior of some notifications to remain displayed until
     * explicitly dismissed through a user action. The value is how long, in
     * milliseconds, those notifications should remain displayed.
     */
    ENFORCE_NOTIFICATION_AUTO_DISMISS_TIMEOUT: 1000

    // List of undocumented settings
    /**
     INDICATOR_FONT_SIZES
    MOBILE_DYNAMIC_LINK
    PHONE_NUMBER_REGEX
    */
};
const options = {
    roomName: 'parcoursrimbaud',
    width: "100%",
    height: 700,
    parentNode: document.querySelector('#meet'),
    interfaceConfigOverwrite: interfaceConfig,
    configOverwrite: config
};

const api = new JitsiMeetExternalAPI(domain, options);


api.executeCommand('displayName','Chypre');
api.executeCommand('subject', 'Hole In Time');
api.executeCommand('password','123456');
// api.executeCommand('toggleVideo');
// api.executeCommand('toggleFilmStrip');
api.executeCommand('avatarUrl', 'https://avatars0.githubusercontent.com/u/3671647');