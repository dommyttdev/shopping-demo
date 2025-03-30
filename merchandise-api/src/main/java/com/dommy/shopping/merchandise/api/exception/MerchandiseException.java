package com.dommy.shopping.merchandise.api.exception;

import com.dommy.shopping.merchandise.api.model.Error;
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
