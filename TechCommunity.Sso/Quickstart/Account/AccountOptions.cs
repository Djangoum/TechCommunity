// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


using System;

namespace IdentityServer4.Quickstart.UI
{
    public static class AccountOptions
    {
        private static bool showLogoutPrompt = true;
        public static bool ShowLogoutPrompt { get => showLogoutPrompt; set => showLogoutPrompt = value; }

        public static bool AutomaticRedirectAfterSignOut { get => automaticRedirectAfterSignOut; set => automaticRedirectAfterSignOut = value; }

        private static bool automaticRedirectAfterSignOut;
    }
}
