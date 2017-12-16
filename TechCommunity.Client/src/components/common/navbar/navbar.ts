import { Collapse, Dropdown } from 'uiv';
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Link } from './link';
import { Logger } from '../../../util/log';
import { dispatchChallengeToken, dispatchGetCurrentUser, dispatchLogout, getCurrentUser } from '../../../store/system/index';
import { User } from 'oidc-client';
import { getConfiguration } from '../../../store/techcommunity/index';
import IConfiguration from '../../../store/models/IConfiguration';

@Component({
  template: require('./navbar.html'),
  components: {
    collapse: Collapse,
  }
})
export class NavbarComponent extends Vue {

  protected logger: Logger;

  inverted: boolean = true; // default value

  showNavbar = false;

  user: User = null;

  object: { default: string } = { default: 'Default object property!' }; // objects as default values don't need to be wrapped into functions

  links: Link[] = [
    new Link('Home', '/')
  ];

  protected async login() {
     await dispatchChallengeToken(this.$store);
  }

  get IsUserLogged() {
    return getCurrentUser(this.$store);
  }

  protected async logout() {
    let result = await dispatchLogout(this.$store);
  }

  protected async register() {
    let configuration: IConfiguration = getConfiguration(this.$store);

    window.location.href = configuration.authorityUri + 'account/register?returnUrl=' + window.location.href;
  }

  @Watch('')

  @Watch('$route.path')
  pathChanged() {
    this.logger.info('Changed current path to: ' + this.$route.path);
  }

  mounted() {
    if (!this.logger) this.logger = new Logger();
    this.$nextTick(() => this.logger.info(this.object.default));
  }
}
