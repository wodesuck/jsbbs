require_jslib('userbox');
using('jsbbs.userbox');
require_jslib('argo_api');
import_module('argo_api', '$api');
require_jslib('scrollbar');

require_jslib('handler');
require_jslib('url');
using('frame.url_for', 'url_for_');

$MOD('jsbbs.main', function(){    
    bind_hook('after_boot', refresh_userbox);
})
