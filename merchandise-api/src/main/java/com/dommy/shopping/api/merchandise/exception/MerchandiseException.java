package com.dommy.shopping.api.merchandise.exception;

import com.dommy.shopping.api.merchandise.model.Error;
import lombok.Getter;

@Getter
public class MerchandiseException extends RuntimeException {
    private final int code;

    public MerchandiseException(int code, String message) {
        super(message);
        this.code = code;
    }

    public Error toError() {
        return new Error(code, getMessage());
    }
}
