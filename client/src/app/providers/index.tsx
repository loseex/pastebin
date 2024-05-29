import { compose } from "@reduxjs/toolkit";
import { FC } from "react";

import { withRouter } from "./with-router";
import { withStore } from "./with-store";

export const withProviders = compose<FC>(withRouter, withStore);
