import { CHANGE_SELF_ROLES } from '../constants/players';

import { makeActionFunction } from "../../common/actionUtils";

export const changeSelfRoleRequest = makeActionFunction(
    CHANGE_SELF_ROLES.REQUEST,
    "roles",
    "userId"
);

export const changeSelfRoleSuccess = makeActionFunction(
    CHANGE_SELF_ROLES.SUCCESS,
    "roles",
    "userId"
);

export const changeSelfRoleFailure = makeActionFunction(
    CHANGE_SELF_ROLES.FAILURE,
    "userId"
);